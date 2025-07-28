package com.example.processor;

import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.RoundEnvironment;
import javax.annotation.processing.Processor;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.Element;
import javax.lang.model.element.TypeElement;
import javax.tools.JavaFileObject;
import java.io.Writer;
import java.io.IOException;
import java.util.Set;

// this decides for which annotations it should be called, for manual control you can dfine method - 
@SupportedAnnotationTypes("com.example.processor.HelloWorld")
@SupportedSourceVersion(SourceVersion.RELEASE_8)

public class HelloWorldProcessor extends AbstractProcessor {
    /**
     * Purpose: Initialization logic for your processor.
     * Called: Once before any processing starts.
     * Usage: Store references to utility objects like Elements, Types, Filer, Messager.
     * 
     * ProcessingEnvironment -
     *   a)Global utilities and tools
     *    b)Access to compiler tools (like Filer, Messager, Elements, Types)
     *    c)Stays the same throughout compilation
     * 
     * API -
     *  a)getFiler() — Create Source Files, Class Files, or Resources (see in process example)
            createSourceFile(String name)	Creates a .java file
            createClassFile(String name)	Creates a .class file
            createResource(...)	Write any file to source/output/resources folder
     *  b)getElementUtils() - Utilities for Working with program Elements (classes, packages, methods, fields, annotations)
     * 
     *     getPackageOf(Element e) - Get the full package of a class
     *     getTypeElement("com.example.MyClass") - Get a class by fully qualified name
     *     getAllMembers(typeElement) - Returns all members (fields, methods, constructors, etc.) of a class, including inherited ones.
     *     getName(CharSequence name) - Returns a Name object (used internally to represent identifiers). - elementUtils.getName("HelloWorld");        

     *  c)getTypeUtils() - Utilities for Working with Types (like classes, interfaces, generics).So you don't have real Class<?> objects — instead, you work with:
            TypeMirror
            TypeElement
            DeclaredType, etc.

            you check if they are of same type, assignablity, inheritiblity etc.
     * d)getMessager() - logs warning
     */
    @Override
    public synchronized void init(ProcessingEnvironment processingEnv) {
        super.init(processingEnv);
        this.elements = processingEnv.getElementUtils();
        this.types = processingEnv.getTypeUtils();
        this.messager = processingEnv.getMessager();
        this.filer = processingEnv.getFiler();
    }
    /**
     * Purpose: This is the core logic — it's called for each round of annotation processing.
     * Called: Multiple times (each "round" of processing).
     * Usage: Find annotated elements and generate files or validate.
     * 
     * 
     * RoundEnvironment - 
     *  a)Info about current round
     *  b)Access to annotated elements in the current round
     *  c)Changes on each round
     * 
     * Return true to indicate that you processed the annotation and no other processor should process it.
     */
    @Override
    public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
        for (Element e : roundEnv.getElementsAnnotatedWith(HelloWorld.class)) {
            /**
             * now e is element on which a particular annotation is applied - this can be method or class etc
             * getElementUtils() of ProcessingEnvironment to get all info about element.
             * see getElementUtils() above
             */
            //
            String className = e.getSimpleName() + "Generated";

            try {
                JavaFileObject file = processingEnv.getFiler().createSourceFile( //filer fpr creating files
                        ((TypeElement) e).getQualifiedName().toString() + "Generated");
                try (Writer writer = file.openWriter()) {
                    writer.write("package " + processingEnv.getElementUtils() // Introspect elements like classes, fields, methods
                            .getPackageOf(e).getQualifiedName() + ";\n\n");
                    writer.write("public class " + className + " {\n");
                    writer.write("    public static void hello() {\n");
                    writer.write("        System.out.println(\"Hello from generated class!\");\n");
                    writer.write("    }\n");
                    writer.write("}\n");
                }
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
        return true;
    }


        /**
         * This is code to get annotations on a class and print their values
         */
        public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
            for (Element element : roundEnv.getElementsAnnotatedWith(Table.class)) {
                //AnnotationMirror - Represents the @Table annotation instance
                Optional<AnnotationMirror> tableAnnotationOpt = getAnnotationMirror(element, Table.class);

                tableAnnotationOpt.ifPresent(tableAnnotation -> {
                    /**
                     * ExecutableElement - Represents each annotation parameter (like name, entityType)
                     * AnnotationValue	Value assigned to each annotation parameter
                     */
                    Map<? extends ExecutableElement, ? extends AnnotationValue> values =
                            tableAnnotation.getElementValues();

                    for (Map.Entry<? extends ExecutableElement, ? extends AnnotationValue> entry : values.entrySet()) {
                        String param = entry.getKey().getSimpleName().toString();
                        AnnotationValue value = entry.getValue();

                        if (param.equals("name")) {
                            String tableName = value.getValue().toString();
                            System.out.println("Found table name: " + tableName);
                        }

                        if (param.equals("entityType")) {
                            //TypeMirror - representation of a class type (e.g., String.class) in compile-time

                            TypeMirror typeMirror = (TypeMirror) value.getValue();
                            System.out.println("Found entity type: " + typeMirror.toString());
                        }
                    }
                });
            }

            return true; // Claim the annotation
        }

        // Utility method to get AnnotationMirror
    private Optional<AnnotationMirror> getAnnotationMirror(Element element, Class<?> annotationClass) {
        String annotationClassName = annotationClass.getName();
        for (AnnotationMirror mirror : element.getAnnotationMirrors()) {
            if (mirror.getAnnotationType().toString().equals(annotationClassName)) {
                return Optional.of(mirror);
            }
        }
        return Optional.empty();
    }

    /**
     * If you use the annotation (@SupportedAnnotationTypes ), the base class (AbstractProcessor) provides an 
     * implementation of the method that returns those values. If you want full control, you can override the method manually.
     */
    @Override
    public Set<String> getSupportedAnnotationTypes() {
        return Set.of("com.example.MyAnnotation");
    }
}


/* 
what does this do -
for class -
    package com.example.demo;

    import com.example.processor.HelloWorld;

    @HelloWorld
    public class MyApp {
    }

It generates -

    // Auto-generated
    package com.example.demo;

    public class MyAppGenerated {
        public static void hello() {
            System.out.println("Hello from generated class!");
        }
    }
 */