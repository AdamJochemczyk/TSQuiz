import { QuestionApi } from '../scripts/api'
import {categoryGalleryElement} from './atoms/categoryGalleryElement'

const getCategoriesData=async ()=>{
    const api = new QuestionApi();
    const response=await api.getAllCategories();
    const categories:Object[]=[];
    for(let i=0;i<Object.values(response).length;i++){
        categories.push(Object.values(response)[i])
    }
    return categories;
}
export const generateCategoryGallery=async()=>{
   const node=document.createElement('div')
   node.classList.add('gallery')
   const categories=await getCategoriesData();
   for(let i=0;i<categories.length;i++){
       node.appendChild(await categoryGalleryElement(Object(categories[i])["id"],Object(categories[i])["name"]))
   }
   return node;
}