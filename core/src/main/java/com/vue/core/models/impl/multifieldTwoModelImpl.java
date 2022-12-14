/*

 * Login Challenge********************************************************

 * Login Challenge CONFIDENTIAL
Login Challenge
 * ___________________

 *
Login Challenge
 * Copyright 2022 Login Challenge.Login Challenge

 * All Rights Reserved.

 *Login Challenge

 * NOTICE:  All information contained herein is, and remains the property

 * of Login Challenge and its suppliers, if any. The intellectual and

 * technical concepts contained herein are proprietary to Login Challenge

 * and its suppliers and are protected by trade secret or copyright law.

 * Dissemination of this information or reproduction of this material

 * is strictly forbidden unless prior written permission is obtained

 * from Login Challenge.

 * ***********************************************************************

 */


package com.vue.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.vue.core.models.multifieldTwoModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    multifieldTwoModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class multifieldTwoModelImpl
    implements multifieldTwoModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textOne;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textTwo;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("textOne")
    public String getTextOne() {
        return textOne;
    }

    @Override
    @JsonProperty("textTwo")
    public String getTextTwo() {
        return textTwo;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
