import {Injectable} from '@nestjs/common';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepository extends Repository<ProductEntity>{
   
}