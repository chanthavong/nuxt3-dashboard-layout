
-- ----------------------------
-- Table structure for settings
-- ----------------------------
DROP TABLE IF EXISTS "public"."settings";
CREATE TABLE "public"."settings" (
  "id" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "options" jsonb,
  "current" varchar COLLATE "pg_catalog"."default",
  "key_group" varchar COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "public"."settings" OWNER TO "postgres";

-- ----------------------------
-- Records of settings
-- ----------------------------
BEGIN;
INSERT INTO "public"."settings" ("id", "options", "current", "key_group") VALUES ('formatTime', NULL, 'hh:mm', NULL);
INSERT INTO "public"."settings" ("id", "options", "current", "key_group") VALUES ('formatDate', NULL, 'MM-dd-yyyy', NULL);
INSERT INTO "public"."settings" ("id", "options", "current", "key_group") VALUES ('symbol', NULL, '$', NULL);
INSERT INTO "public"."settings" ("id", "options", "current", "key_group") VALUES ('decimal', NULL, '2', NULL);
COMMIT;

-- ----------------------------
-- Primary Key structure for table settings
-- ----------------------------
ALTER TABLE "public"."settings" ADD CONSTRAINT "settings_pkey" PRIMARY KEY ("id");
