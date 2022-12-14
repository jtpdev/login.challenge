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


package com.vue.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Select} Sling Model used for the {@code vue/components/select} component.
 * 
 */
@ConsumerType
public interface Select
    extends ComponentExporter
{


    @JsonProperty("valorInicial")
    String getValorInicial();

}
