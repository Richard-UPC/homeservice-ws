import { RequestHandler, Response, Request } from "express";
import * as response from '../common/Response';
import * as constants from '../common/Constants';
import { getRepository } from "typeorm";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { transformAndValidate } from 'class-transformer-validator'
import * as jwt from 'jsonwebtoken';
import { Category } from "../entities/category";


const GetCategories: RequestHandler = async (req: Request, res: Response) => {
    try{
        const categories = await getRepository(Category).find();
        res.status(200).send(response.successResult(categories)); 
    }catch(ex){
        const error = ex as Error;
        res.status(500).send({message: error.message})
    }
};

const GetCategory: RequestHandler = async (req: Request, res: Response) => {
    try{
        const category = await getRepository(Category).findOne(req.params.id);
        const objectResponse = category ? category : {}; 
        res.status(200).send(response.successResult(objectResponse));
    }catch(ex){
        const error = ex as Error;
        res.status(500).send({message: error.message})
    }
};

const CreateCategory: RequestHandler = async (req: Request, res: Response) => {
    try{
        const newCategory = getRepository(Category).create(req.body);
        const results = await getRepository(Category).save(newCategory);
        res.status(201).send(results);
    }catch(ex){
        const error = ex as Error;
        res.status(500).send({message: error.message});
    }
};

const UpdateCategory: RequestHandler = async (req: Request, res: Response) => {
    try{

    }catch(ex){

    }
}

export {
    GetCategories,
    GetCategory,
    CreateCategory,
    UpdateCategory
}