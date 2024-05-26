import { Inject, Injectable, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "src/entities/product.entity";
import { ProductRepository } from "./product.repository";
import { NewProductDto } from "src/dtos/new-product-dto.dto";
import { ResponseResult } from "src/commons/response-result";
import { CodeResponse } from "src/constants/code-response.enum";
import { MessageResponse } from "src/constants/message-response.enum";
import { ResponseType } from "src/constants/response-result-type";
import { Response } from 'express';
import { ProductModel } from "src/models/product.model";

@Injectable()

export class ProductService {
   
    constructor( 
        @InjectRepository(ProductEntity) private readonly productRepository: ProductRepository
    ){}

    async getProducts(): Promise<ProductEntity[]> {
        return await this.productRepository.find();
    }

    async getProductDetail(id: string): Promise<ProductEntity> {
        return await this.productRepository.findOne({
            where: {id: id},
        });
    }

    async addNewProduct(newProductDto: NewProductDto,  res: Response):  Promise<ResponseType<ProductEntity>>  {
        try {
            let data = await this.productRepository.save(newProductDto);
            return res.json(new ResponseResult(data, CodeResponse.CREATE_PRODUCT_SUCCESS, MessageResponse.CREATE_PRODUCT_SUCCESS));
        }
        catch(error) {
            return res.json(new ResponseResult(error, CodeResponse.ERROR, MessageResponse.ERROR));
        }
    }

    async updateProduct(id: string, product: NewProductDto, res: Response): Promise<ResponseType<string | undefined>> {
        try {
            let data = await this.productRepository.update(id, product);
            return res.json(new ResponseResult(undefined, CodeResponse.CREATE_PRODUCT_SUCCESS, MessageResponse.CREATE_PRODUCT_SUCCESS));
        }
        catch(error) {
            return res.json(new ResponseResult(undefined, CodeResponse.ERROR, MessageResponse.ERROR));
        }
    }

    async deleteProduct(id: string, res: Response): Promise<ResponseType<ProductModel>> {
        try {
            let data = this.productRepository.delete(id);
            return res.json(new ResponseResult(12, CodeResponse.CREATE_PRODUCT_SUCCESS, MessageResponse.CREATE_PRODUCT_SUCCESS));
        }
        catch(error) {
            return res.json(new ResponseResult(undefined, CodeResponse.ERROR, MessageResponse.ERROR));
        }
    }

}   