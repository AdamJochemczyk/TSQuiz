import {generateCategoryGallery} from '../categoryGallery';

const showCategoryGallery=async ()=>{
    (<HTMLElement>document.querySelector('.startQuizForm')).style.display='none';
    const gallery= await generateCategoryGallery();
    document.body.appendChild(gallery);
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