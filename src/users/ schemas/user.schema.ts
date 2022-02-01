import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop( { required: true } )
  first_name: string;

  @Prop( { required: true } )
  last_name: string;

  @Prop( { required: true } )
  email: string;

  @Prop( { required: true } )
  phone: string;

  @Prop( { required: true } )
  country: string;

  @Prop( { required: true } )
  state: string;

  @Prop( { required: true } )
  zip_code: string;

  @Prop( { default: true } )
  is_active: boolean;

  @Prop( { default: new Date() } )
  created_at: Date;

  @Prop( { default: new Date() } )
  updated_at: Date;


}

export const UserSchema = SchemaFactory.createForClass(User);
