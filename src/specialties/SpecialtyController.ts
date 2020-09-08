import { RequestHandler, Response, Request } from "express";
import * as response from '../common/Response';
import * as constants from '../common/Constants';
import { getRepository } from "typeorm";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { transformAndValidate } from 'class-transformer-validator'
import * as jwt from 'jsonwebtoken';
import {Specialty} from "../entities/specialty";
import {getConnection} from "typeorm"


const GetSpecialties: RequestHandler = async (req: Request, res: Response) => {
    try{
        const specialties = await getRepository(Specialty).find();
        res.status(200).send(response.successResult(specialties)); 
    }catch(ex){
        const error = ex as Error;
        res.status(500).send({message: error.message})
    }
};

const GetSpecialty: RequestHandler = async (req: Request, res: Response) => {
    try{
        const specialty = await getRepository(Specialty).findOne(req.params.id);
        const objectResponse = specialty ? specialty : {}; 
        res.status(200).send(response.successResult(objectResponse));
    }catch(ex){
        const error = ex as Error;
        res.status(500).send({message: error.message})
    }
};

const CreateSpecialty: RequestHandler = async (req: Request, res: Response) => {
    try{

        const results = await getConnection()
                        .createQueryBuilder()
                        .insert()
                        .into(Specialty)
                        .values({
                            name: req.body.name,
                            category: {id: req.body.categoryId},
                            description: req.body.description,
                            isActive: true
                        }).execute();


        /*const newSpecialty = getRepository(Specialty).create(req.body);
        const results = await getRepository(Specialty).save(newSpecialty);
        */
        res.status(201).send(results);
    }catch(ex){
        const error = ex as Error;
        res.status(500).send({message: error.message});
    }
};

const UpdateSpecialty: RequestHandler = async (req: Request, res: Response) => {
    try{

    }catch(ex){

    }
}

export {
    GetSpecialties,
    GetSpecialty,
    CreateSpecialty,
    UpdateSpecialty
}