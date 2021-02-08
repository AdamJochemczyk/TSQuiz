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
   const promises=await categories.map(category=>categoryGalleryElement(Object(category)["id"],Object(category)["name"]))
   const galleryElements=await Promise.all(promises);
   galleryElements.map(el=>node.appendChild(el))
   return node;
}