import { cva, type VariantProps } from 'class-variance-authority';

export const wrapper = cva(
	'min-h-screen bg-background flex flex-col relative transition-[padding]',
	{
		variants: {
			player: {
				open: 'pb-20',
				closed: ''
			}
		},
		defaultVariants: {
			player: 'closed'
		}
	}
);

export type WrapperProps = VariantProps<typeof wrapper>['player'];
