import {categoryGalleryElement} from './categoryGalleryElement'
const generateCategoryGallery=()=>{
    /*
        on click choose category show all categories in grid
    */
   //fetch data form API
   //generate items on it
   //remove on choose
}

const showCategoryGallery=()=>{
    (<HTMLElement>document.querySelector('.startQuizForm')).style.display='none';
    generateCategoryGallery();
}

export const btnToCategoryGallery=()=>{
   const btnToCategoryGallery=document.createElement('a');
   btnToCategoryGallery.classList.add('cta')
   btnToCategoryGallery.text="Choose category";
   btnToCategoryGallery.addEventListener('click',()=>{
       showCategoryGallery()
   })

   return btnToCategoryGallery;
}