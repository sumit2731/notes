/**
 * In Spring, @Lookup is a method-level annotation that tells Spring to dynamically override a method to return a new bean 
 * instance from the ApplicationContext each time the method is called.
 * 
 * How It Works At Runtime -
 *  a)Spring detects @Lookup during bean scanning or initialization.
 *  b)Instead of creating a direct instance of MySingletonBean, it creates a CGLIB-enhanced subclass.
 *  c)Spring dynamically overrides the getPrototypeBean() method in that subclass.
 *  d)In the overridden method, Spring internally calls:
 *      return applicationContext.getBean(MyPrototypeBean.class);
 *  
 */

@Component
@Scope("prototype")
public class MyPrototypeBean {
    public MyPrototypeBean() {
        System.out.println("New MyPrototypeBean instance: " + this);
    }
}


@Component
public abstract class MySingletonBean {

    public void perform() {
        MyPrototypeBean bean = getPrototypeBean();
        System.out.println("Using prototype: " + bean);
    }

    @Lookup
    protected abstract MyPrototypeBean getPrototypeBean();
}


/**
 * How it works -
 *  a)Spring dynamically overrides the method getPrototypeBean() at runtime
 *  b)Every time perform() is called, getPrototypeBean() returns a new instance
 */