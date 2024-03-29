import { SerializableFormData, WithUserId } from "@common"
import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, Length } from "class-validator"

export class CreateData {
  @Length(20)
  @ApiProperty()
      title: string

  @Length(100)
  @ApiProperty()
      description: string

  @IsNumber()
  @ApiProperty()
      price: number
}

type CreateInput = WithUserId<SerializableFormData<CreateData>>
export default CreateInput