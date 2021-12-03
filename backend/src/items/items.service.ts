import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  private items: UpdateItemDto[] = [];
  create(createItemDto: CreateItemDto) {
    let item: UpdateItemDto = {
      name: createItemDto.name,
      description: createItemDto.description,
      id: new Date().getTime()
    }
    this.items.push(item);

    return item;
  }

  findAll() {
    return this.items;
  }

  findOne(id: number) {
    return this.items.find(d => d.id == id);
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    console.log(this.items, id)
    let item = this.findOne(id);

    item.name = updateItemDto.name;
    item.description = updateItemDto.description;
    return item;
  }

  remove(id: number) {
    this.items = this.items.filter(d => d.id != id);
  }
}
