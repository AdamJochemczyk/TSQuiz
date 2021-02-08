import {QuestionApi, questionDifficulty, questionType} from '../scripts/api'

describe("API communication tests",()=>{

    test("without params api have default values",()=>{
         const api=new QuestionApi();
         expect(api.getAmount()).toBe(10)
         expect(api.getCategory()).toBe(0)
         expect(api.getDifficulty()).toBe("all")
         expect(api.getQuestionType()).toBe("all")
    })
    test("should not set amount <1",()=>{
        const api=new QuestionApi()
        api.setAmount(-1)
        expect(api.getAmount()).toBe(1);
        api.setAmount(1)
        expect(api.getAmount()).toBe(1);
    })
    test("should set amount >1",()=>{
        const api=new QuestionApi()
        api.setAmount(10)
        expect(api.getAmount()).toBe(10);
        api.setAmount(12)
        expect(api.getAmount()).toBe(12);
    })
     test("should not set category <1",()=>{
        const api=new QuestionApi()
        api.setCategory(-1)
        expect(api.getCategory()).toBe(1);
        api.setAmount(1)
        expect(api.getCategory()).toBe(1);
    })
    test("should set category >1",()=>{
        const api=new QuestionApi()
        api.setCategory(5)
        expect(api.getCategory()).toBe(5);
        api.setCategory(8)
        expect(api.getCategory()).toBe(8);
    })
    test("should set difficulty",()=>{
        const api=new QuestionApi()
        api.setDifficulty(questionDifficulty.all)
        expect(api.getDifficulty()).toBe(questionDifficulty.all)
        api.setDifficulty(questionDifficulty.easy)
        expect(api.getDifficulty()).toBe(questionDifficulty.easy)
        api.setDifficulty(questionDifficulty.medium)
        expect(api.getDifficulty()).toBe(questionDifficulty.medium)
        api.setDifficulty(questionDifficulty.hard)
        expect(api.getDifficulty()).toBe(questionDifficulty.hard)
    })
    test("should set questionType",()=>{
        const api=new QuestionApi()
        api.setQuestionType(questionType.all)
        expect(api.getQuestionType()).toBe(questionType.all)
        api.setQuestionType(questionType.multiple)
        expect(api.getQuestionType()).toBe(questionType.multiple)
        api.setQuestionType(questionType.boolean)
        expect(api.getQuestionType()).toBe(questionType.boolean)
    })
    test("should set session token for api",()=>{
        const api=new QuestionApi();
        expect(typeof api.getSessionToken()).toBe("string");
    })

})