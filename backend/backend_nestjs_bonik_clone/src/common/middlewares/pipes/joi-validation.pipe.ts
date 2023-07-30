import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';

export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any) {
    const { error, value: transformedValue } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('Validation failed');
    }

    return transformedValue;
  }
}
