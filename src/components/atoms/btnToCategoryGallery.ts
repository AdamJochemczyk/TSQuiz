import {generateCategoryGallery} from '../categoryGallery';

const showCategoryGallery=async ()=>{
    (<HTMLElement>document.querySelector('.startQuizForm')).style.display='none';
    const loader=document.createElement('p');
    loader.textContent="Loading...";
    loader.style.textAlign='center';
    document.body.appendChild(loader);
    const gallery= await generateCategoryGallery();
    document.body.appendChild(gallery);
    document.body.removeChild(loader);
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