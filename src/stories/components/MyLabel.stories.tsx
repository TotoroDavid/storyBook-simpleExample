import { MyLabel } from "../../components/MyLabel";
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
}