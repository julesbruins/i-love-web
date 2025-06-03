// const $sectionPin = document.querySelector('#sectionPin');
// const $pinWrapSticky = document.querySelector('.pin-wrap-sticky');
// const $pinWrap = document.querySelector('.pin-wrap');

// /* Stretch it out, so that we create room for the horizontal scroll animation */
// $sectionPin.style.height = '500vh';
// $sectionPin.style.overflow = 'visible'; // To make position sticky work …

// /* Stick to Top */
// $pinWrapSticky.style.height = '100vh';
// $pinWrapSticky.style.width = '100vw';
// $pinWrapSticky.style.position = 'sticky';
// $pinWrapSticky.style.top = '0';
// $pinWrapSticky.style.overflowX = 'hidden';

// /* Stretch out pinwrap */
// $pinWrap.style.height = '100vh';
// $pinWrap.style.width = '250vmax';

// // Scroll-Linked Animation
// $pinWrap.animate(
// 	{
// 		transform: [ ``, `translateX(calc(-100% + 100vw))`],
// 	},
// 	{
// 		timeline: new ViewTimeline({
// 			subject: $sectionPin,
// 			axis: 'block',
// 		}),
// 		fill: 'forwards',
// 		rangeStart: `contain 0%`,
// 		rangeEnd: `contain 100%`,
// 	}
// );