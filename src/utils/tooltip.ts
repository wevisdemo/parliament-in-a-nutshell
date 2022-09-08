import { computePosition, offset, shift } from '@floating-ui/dom';

export const showTooltip = (event: MouseEvent) => {
	if (!event.target) return;

	window.el_tooltip.textContent = (event.target as HTMLImageElement).alt;
	window.el_tooltip.classList.add('show');

	computePosition(event.target as Element, window.el_tooltip, {
		placement: 'top',
		middleware: [offset(8), shift({ padding: 8 })]
	}).then(({ x, y }) => {
		Object.assign(window.el_tooltip.style, {
			left: `${x}px`,
			top: `${y}px`
		});
	});
};

export const hideTooltip = () => {
	window.el_tooltip.classList.remove('show');
	Object.assign(window.el_tooltip.style, {
		left: null,
		top: null
	});
};
