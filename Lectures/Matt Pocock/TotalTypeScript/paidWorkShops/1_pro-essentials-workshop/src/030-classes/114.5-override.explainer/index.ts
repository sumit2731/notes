class BaseClass {
  private method() {
    console.log("BaseClass method");
  }
}

class SubClass extends BaseClass {
  /**
   * what override says is it basically says, okay, this must be, must be an overrided method from the base class.
   * Otherwise you might end up with a situation where they fall out of sync with each other. And there's a TS
   * config option to make sure you do this - noImplicitOverride
   *
   *
   * It is lik @override in Java
   */
  override method() {
    console.log("SubClass method");
  }
}

const instance = new SubClass();

instance.method();
