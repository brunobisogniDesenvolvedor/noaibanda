import {MigrationInterface, QueryRunner, Table} from "typeorm";



export class CriarAgendamento1608621547194 implements MigrationInterface {
    public async up(queryRunner : QueryRunner) : Promise<void>{
        await queryRunner.createTable(
            new Table({
                name: 'CriarAgendamentos', 
                columns : [
                    {
                        name : 'id', 
                        type: 'varchar',
                        isPrimary: true, 
                        generationStrategy: 'uuid', 
                       
                    },
                    {
                        name:  'provider',
                        type: 'varchar', 
                        isNullable: false, 
  
                    },
                    {
                        name: 'date', 
                        type: 'timestamp with time zone',
                        isNullable: false, 
                    }
                ], 
            }),
        );
      }
  
      public async down (queryRunner: QueryRunner) : Promise<void>{
          await queryRunner.dropTable('CriarAgendamentos');
      }

}
