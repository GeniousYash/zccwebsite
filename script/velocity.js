      const velocity = window.Velocity || $.Velocity,
     accordions = document.querySelectorAll('.accordion'),
     animationDuration = 500,
 
     closeAccordion = (clickedAccordion) => {
         clickedAccordion.classList.remove('accordion--open');
         velocity(clickedAccordion.querySelector('svg'), {rotateZ: 0}, {duration: animationDuration, easing: 'easeInQuad'});
         velocity(clickedAccordion.querySelector('.accordion__content'), 'slideUp', {duration: animationDuration, easing: 'easeInQuad'});
     },
 
     openAccordion = (clickedAccordion) => {
         clickedAccordion.classList.add('accordion--open');
         velocity(clickedAccordion.querySelector('svg'), {rotateZ: '135deg'}, {duration: animationDuration, easing: 'easeOutQuad'});
         velocity(clickedAccordion.querySelector('.accordion__content'), 'slideDown', {duration: animationDuration, easing: 'easeOutQuad'});
     },
 
     isCollapsible = (accordion) => {
         return accordion.getAttribute('collapsible') === 'true';
     },
 
     checkCollapse = () => {
         let clickedAccordion = event.currentTarget,
             groupedAccordions = [].slice.call(clickedAccordion.closest('.accordion__container').querySelectorAll('.accordion'));
 
         groupedAccordions.every(isCollapsible) ? updateCollapseStatus(clickedAccordion) : updateOpenStatus(clickedAccordion);
     },
 
     updateCollapseStatus = clickedAccordion => {
         clickedAccordion.classList.contains('accordion--open') ? closeAccordion(clickedAccordion) : openAccordion(clickedAccordion);
     },
  
     updateOpenStatus = clickedAccordion => {
         if (!clickedAccordion.classList.contains('accordion--open')) {
             [].forEach.call(clickedAccordion.closest('.accordion__container').querySelectorAll('.accordion'), accordion => {
                 closeAccordion(accordion);
             });
 
             openAccordion(clickedAccordion);
         };
     },
     init = () => {
         [].forEach.call(accordions, accordion => {
             accordion.addEventListener('click', checkCollapse);
         });
 
         // Open first accordion for non collapsible accordions on page load
         [].forEach.call(document.querySelectorAll('.accordion__container'), accordionContainers => {
             let allAccords = [].slice.call(accordionContainers.querySelectorAll('.accordion')),
                 firstAccord = allAccords[0];
 
             if (!allAccords.every(isCollapsible)) {
                 firstAccord.classList.add('accordion--open');
                 velocity(firstAccord.querySelector('svg'), {rotateZ: '135deg'}, {duration: 0});
                 velocity(firstAccord.querySelector('.accordion__content'), 'slideDown', {duration: 0});
             }
         });
     };
 
 document.addEventListener('DOMContentLoaded', init);
 
