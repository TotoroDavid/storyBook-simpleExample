var i=Object.defineProperty;var l=(e,o)=>i(e,"name",{value:o,configurable:!0});import{j as r}from"./jsx-runtime-69008c6b.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";const a=l(({allCaps:e=!1,color:o="primary",fontColor:s,label:t="no label",size:c="normal"})=>r("span",{className:`label ${c} text-${o} `,style:{color:s},children:e?t.toLocaleUpperCase():t}),"MyLabel");try{a.displayName="MyLabel",a.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"no label"},description:"you should to change the label you want",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"you have only 4 options for the size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"if you want all capitalizers",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"the color of my button",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"change the font color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const h={parameters:{storySource:{source:`import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' }, // if I want to change with selector options
        color: { control: 'select' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel{...args} />

export const Basic = Template.bind({})
Basic.args = {
    size: 'normal',
    allCaps: false //true cap all the words
}

export const Secondary = Template.bind({})
Secondary.args = {
    size: 'h1',
    allCaps: true,
    color: 'secondary' // primary | secondary | tertiary
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'h2',
    allCaps: true //true cap all the words
}`,locationsMap:{basic:{startLoc:{col:49,line:13},endLoc:{col:79,line:13},startBody:{col:49,line:13},endBody:{col:79,line:13}},secondary:{startLoc:{col:49,line:13},endLoc:{col:79,line:13},startBody:{col:49,line:13},endBody:{col:79,line:13}},tertiary:{startLoc:{col:49,line:13},endLoc:{col:79,line:13},startBody:{col:49,line:13},endBody:{col:79,line:13}}}}},title:"UI/MyLabel",component:a,argTypes:{size:{control:"select"},color:{control:"select"}}},n=l(e=>r(a,{...e}),"Template"),p=n.bind({});p.args={size:"normal",allCaps:!1};const y=n.bind({});y.args={size:"h1",allCaps:!0,color:"secondary"};const d=n.bind({});d.args={size:"h2",allCaps:!0};const L=["Basic","Secondary","Tertiary"];export{p as Basic,y as Secondary,d as Tertiary,L as __namedExportsOrder,h as default};
//# sourceMappingURL=MyLabel.stories-473e7e19.js.map
