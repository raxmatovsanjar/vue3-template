import { Story } from '@storybook/vue3';
import Icon, { Props } from '~/stories/Icon.vue';

export default {
	title: 'Icon',
	component: Icon,
};

const Template: Story<Props> = args => ({
	components: { Icon },
	setup() {
		return { args };
	},
	template: '<Icon v-bind="args"/>',
});

export const IconEye = Template.bind({});
IconEye.args = {
	name: 'eye',
};
