import {generateCategoryGallery} from '../categoryGallery';

const showCategoryGallery=async ()=>{
    (<HTMLElement>document.querySelector('.startQuizForm')).style.display='none';
    const loader=document.createElement('p');
    loader.textContent="Loading...";
    loader.style.textAlign='center';
    loader.style.color='white';
    document.body.appendChild(loader);
    const gallery= await generateCategoryGallery();
    document.body.appendChild(gallery);
    document.body.removeChild(loader);
}

export const btnToCategoryGallery=()=>{
   const btnToCategoryGallery=document.createElement('button');
   btnToCategoryGallery.classList.add('cta')
   btnToCategoryGallery.textContent="Choose category";
   btnToCategoryGallery.addEventListener('click',e=>{
       e.preventDefault();
       showCategoryGallery()
   })

   return btnToCategoryGallery;
}