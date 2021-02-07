import axios, {AxiosResponse} from "axios";

export enum questionDifficulty{
    all="all",
    easy="easy",
    medium="medium",
    hard="hard"
}

export enum questionType{
    all="all",
    multiple="multiple",
    boolean="boolean"
}

export class QuestionApi{

    private amount?:number;
    private categoryId?:number;
    private difficulty?:questionDifficulty;
    private type?:questionType;
    private token:string;
    private baseUrl:string="https://opentdb.com/api.php?";

    setAmount(val:number){
        this.amount= val<1 ? 1 : val;
    }
    getAmount(){
        return this.amount;
    }
    setCategory(val:number){
        this.categoryId=val<1 ? 1: val;
    }
    getCategory(){
        return this.categoryId;
    }
    setDifficulty(val:questionDifficulty){
        this.difficulty=val;
    }
    getDifficulty(){
        return this.difficulty;
    }
    setQuestionType(val:questionType){
        this.type=val;
    }
    getQuestionType(){
        return this.type;
    }
    async requestForSessionToken(){
        let token="0";
        await axios.get("https://opentdb.com/api_token.php?command=request").then((response:AxiosResponse)=>{
            token=response.data.token
        }).catch(error=>console.log(error))
        return token;
    }
    async setSessionToken(){
        this.token=await this.requestForSessionToken();
    }
    getSessionToken(){
        return this.token;
    }

    constructor(amount=5,categoryId=0,difficulty=questionDifficulty.all,type=questionType.all){
        this.setAmount(amount)
        this.categoryId=categoryId;
        this.difficulty=difficulty;
        this.type=type;
    }

    getAllCategories(){
        axios.get("https://opentdb.com/api_category.php").then((response:AxiosResponse)=>{
            console.log(response.data.trivia_categories)
            return response.data.trivia_categories
        }).catch(error=>console.log(error))
    }

    getAllQuestionsData(){
        axios.get("https://opentdb.com/api_count_global.php").then((response:AxiosResponse)=>{
            return response.data
        }).catch(error=>console.log(error))
    }

    getQuestionForCategory(id:number){
        axios.get(`https://opentdb.com/api_count.php?category=${id}`).then((response:AxiosResponse)=>{
            return response.data
        }).catch(error=>console.log(error))
    }

    private constructRequestString(){
        let request=`${this.baseUrl}amount=${this.amount}`;
        if(this.categoryId!==0) request+=`&category=${this.categoryId}`;
        if(this.difficulty!==questionDifficulty.all)
            request+=`&difficulty=${this.difficulty}`;
        if(this.type!==questionType.all)
            request+=`&type=${this.type}`
        if(this.token!=="0")
        request+=`&token=${this.token}`
        return request;
    }
    getQuizQuestions(){
        axios.get(this.constructRequestString()).then((response:AxiosResponse)=>{
            return response.data
        }).catch(error=>console.log(error))
    }
}