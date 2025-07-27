/**
 * If Bean is prototype, You get a new instance for bean each time
 * Optional access - Returns null if bean is not present
 * 
 * 
 * 
 * T getObject() - Throws NoSuchBeanDefinitionException if not found.
 * getIfAvailable() - Returns the bean if available, Returns null if the bean is not found.
 * T getIfAvailable(Supplier<T> defaultSupplier) - If bean is not found, executes supplier and returns fallback.
 * 
 * Stream<T> stream() -  Returns a Stream over all beans of type T.
 * 
 */

import org.springframework.beans.factory.ObjectProvider;

@Component
public class MySingletonBean {

    @Autowired
    private ObjectProvider<MyPrototypeBean> prototypeProvider;

    public void doSomething() {
        MyPrototypeBean bean = prototypeProvider.getObject();
        System.out.println("Using: " + bean);
    }
}