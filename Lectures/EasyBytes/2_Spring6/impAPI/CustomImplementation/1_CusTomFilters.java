package com.example.demo.filters;

import org.springframework.core.type.filter.TypeFilter;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;

import java.io.IOException;

public class CustomNameFilter implements TypeFilter {

    @Override
    /**
     * MetadataReader - Gives access to class metadata (class name, annotations, etc.)
     * MetadataReaderFactory - Used to read metadata of other classes
     * match - Your custom logic goes here. Return true to include the class as a Spring bean
     */
    public boolean match(MetadataReader metadataReader, MetadataReaderFactory metadataReaderFactory)
            throws IOException {

        String className = metadataReader.getClassMetadata().getClassName();
        return className.contains("Custom");
    }
}