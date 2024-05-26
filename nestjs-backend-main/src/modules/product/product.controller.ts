import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from "@nestjs/common";
import { ProductService } from "./product.service";
import { NewProductDto } from "src/dtos/new-product-dto.dto";
import { Response } from 'express';
import { ResponseType } from "src/constants/response-result-type";
import { ProductEntity } from "src/entities/product.entity";
import { ResponseResult } from "src/commons/response-result";
import { CodeResponse } from "src/constants/code-response.enum";
import { MessageResponse } from "src/constants/message-response.enum";
import { ProductModel } from "src/models/product.model";
@Controller('api/v1/products')

export class ProductController {
    constructor(private readonly productService: ProductService){}
    
    // @Get()
    // async getProducts(@Res() res: Response): Promise<ResponseType<ProductEntity[]>> {
    //     return res.json(new ResponseResult(await this.productService.getProducts(), CodeResponse.CREATE_PRODUCT_SUCCESS, MessageResponse.CREATE_PRODUCT_SUCCESS));
    // }

    // @Get(':id')
    // getProductDetail(@Param('id') id: string) {
    //     return this.productService.getProductDetail(id);
    // }


    // @Get('filter/app')
    // checkParams(@Query() filterDto: {price: number, type: number}): number {
    //     return filterDto.type;
    // }

    // @Post('add-new-product')
    // addNewProduct(@Body() newProduct: NewProductDto, @Res() res: Response) {
    //     return this.productService.addNewProduct(newProduct, res);
    // }    

    // @Put(':id')
    // async updateProduct(@Param('id') id: string, @Body() product: NewProductDto, @Res() res: Response): Promise<ResponseType<string | undefined>> {
    //     return await this.productService.updateProduct(id, product, res);
    // }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string, @Res() res: Response): Promise<ResponseType<ProductModel>> {
        return await this.productService.deleteProduct(id, res);
    }
}