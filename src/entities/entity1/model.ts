import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
class Entity1 extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;
}

export default Entity1;