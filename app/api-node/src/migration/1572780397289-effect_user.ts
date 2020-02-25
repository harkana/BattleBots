import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class effectUser1572780397289 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "effect_user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    generationStrategy: "increment",
                    isUnique: true,
                    isPrimary: true
                },
                {
                    name: "effect_id",
                    type: "int",
                    isNullable: false
                },
                {
                    name: "user_id",
                    type: "int",
                    isNullable: false
                }
            ]
        }));

        await queryRunner.createForeignKey("effect_user", new TableForeignKey({
            name: "fk_effect_user_effect_id",
            columnNames: ["effect_id"],
            referencedTableName: "effect",
            referencedColumnNames: ["id"]
        }));

        await queryRunner.createForeignKey("effect_user", new TableForeignKey({
            name: "fk_effect_user_user_id",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey("effect_user", "fk_effect_user_effect_id");
        await queryRunner.dropForeignKey("effect_user", "fk_effect_user_user_id");
        await queryRunner.dropTable("effect_user");
    }
}
