import { cva } from '$lib/utils/cva';
import type { VariantProps } from 'class-variance-authority';

export const navigator_item = cva(
	'inline-flex items-center relative h-full text-[14px] transition-color duration-300',
	{
		variants: {
			status: {
				active: 'text-foreground',
				inactive: 'text-[#eaeaea80] hover:text-foreground'
			}
		},
		defaultVariants: {
			status: 'inactive'
		}
	}
);

export type NavigatorItemProps = VariantProps<typeof navigator_item>;
