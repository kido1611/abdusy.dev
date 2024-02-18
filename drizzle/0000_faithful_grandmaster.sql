CREATE TABLE `logs` (
	`id` integer PRIMARY KEY NOT NULL,
	`ip_address` text NOT NULL,
	`path` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
