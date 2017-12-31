webpackJsonp([23],{htB7:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=t("6Xbx"),n=t("/oeL"),l=t("BkNc"),d=t("Xa16"),r=function(){function e(){this.navs=[{title:"Intro",links:[{href:"./introduction",text:"Introduction Example"}]},{title:"Field Options",links:[{href:"./field-options/expression-properties",text:"Expression Properties"},{href:"./field-options/default-value",text:"Default Value"},{href:"./field-options/hide-fields",text:"Hide Fields"},{href:"./field-options/model-options",text:"modelOptions"}]},{title:"Form Options",links:[{href:"./form-options/reset-model",text:"Reset Model"},{href:"./form-options/form-state",text:"Form State"}]},{title:"Bootstrap Formly",links:[{href:"./bootstrap-formly/table-rows",text:"Table Rows"},{href:"./bootstrap-formly/select",text:"Select"}]},{title:"Bootstrap Specific",links:[{href:"./bootstrap-specific/advanced-layout",text:"Advanced Layout"},{href:"./bootstrap-specific/bootstrap-horizontal",text:"Bootstrap Horizontal"},{href:"./bootstrap-specific/input-add-ons",text:"Input add-ons"}]},{title:"Advanced",links:[{href:"./advanced/repeating-section",text:"Repeating Section"},{href:"./advanced/multi-step-form",text:"Multi-Step Form"}]},{title:"Other",links:[{href:"./other/cascaded-select",text:"Cascaded Select"},{href:"./other/disable-submit-button",text:"Disable submit button"},{href:"./other/advanced-layout-flex",text:"Advanced Layout (Flex)"},{href:"./other/matching-two-fields",text:"Matching Two Fields"},{href:"./other/force-show-error",text:"Force showing error state"},{href:"./other/toggle-required",text:"Toggle required field"},{href:"./other/nested-formly-forms",text:"Nested Forms (fieldGroup wrapper)"}]}]}return e=i.b([Object(n.o)({selector:"formly-demo-examples",template:'\n  <mat-sidenav-container style="min-height: 90% !important;">\n    <mat-sidenav mode="side" opened="true" [style.width.px]="250">\n      <mat-nav-list *ngFor="let nav of navs" dense>\n        <h3 mat-subheader>{{ nav.title }}</h3>\n        <mat-divider></mat-divider>\n\n        <a *ngFor="let link of nav.links" mat-list-item [routerLink]="link.href">\n          {{ link.text }}\n        </a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n  '})],e)}();t.d(o,"ExamplesModule",function(){return a});var a=function(){function e(){}return e=i.b([Object(n.M)({imports:[d.b,l.g.forChild([{path:"",component:r,children:[{path:"",pathMatch:"full",redirectTo:"introduction"},{path:"introduction",loadChildren:"./introduction/config.module#ConfigModule"},{path:"field-options",children:[{path:"expression-properties",loadChildren:"./field-options/expression-properties/config.module#ConfigModule"},{path:"default-value",loadChildren:"./field-options/default-value/config.module#ConfigModule"},{path:"hide-fields",loadChildren:"./field-options/hide-fields/config.module#ConfigModule"},{path:"model-options",loadChildren:"./field-options/model-options/config.module#ConfigModule"}]},{path:"form-options",children:[{path:"reset-model",loadChildren:"./form-options/reset-model/config.module#ConfigModule"},{path:"form-state",loadChildren:"./form-options/form-state/config.module#ConfigModule"}]},{path:"bootstrap-formly",children:[{path:"table-rows",loadChildren:"./bootstrap-formly/table-rows/config.module#ConfigModule"},{path:"select",loadChildren:"./bootstrap-formly/select/config.module#ConfigModule"}]},{path:"bootstrap-specific",children:[{path:"advanced-layout",loadChildren:"./bootstrap-specific/advanced-layout/config.module#ConfigModule"},{path:"bootstrap-horizontal",loadChildren:"./bootstrap-specific/bootstrap-horizontal/config.module#ConfigModule"},{path:"input-add-ons",loadChildren:"./bootstrap-specific/input-add-ons/config.module#ConfigModule"}]},{path:"advanced",children:[{path:"repeating-section",loadChildren:"./advanced/repeating-section/config.module#ConfigModule"},{path:"multi-step-form",loadChildren:"./advanced/multi-step-form/config.module#ConfigModule"}]},{path:"other",children:[{path:"cascaded-select",loadChildren:"./other/cascaded-select/config.module#ConfigModule"},{path:"disable-submit-button",loadChildren:"./other/disable-submit-button/config.module#ConfigModule"},{path:"advanced-layout-flex",loadChildren:"./other/advanced-layout-flex/config.module#ConfigModule"},{path:"matching-two-fields",loadChildren:"./other/matching-two-fields/config.module#ConfigModule"},{path:"force-show-error",loadChildren:"./other/force-show-error/config.module#ConfigModule"},{path:"toggle-required",loadChildren:"./other/toggle-required/config.module#ConfigModule"},{path:"nested-formly-forms",loadChildren:"./other/nested-formly-forms/config.module#ConfigModule"}]}]}])],declarations:[r]})],e)}()}});