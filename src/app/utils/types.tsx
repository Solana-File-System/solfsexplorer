import { PublicKey } from "@solana/web3.js";
import { Dispatch, SetStateAction } from "react";
import { IDataAccountMeta } from "solana-data-program";

const LOCALHOST = "http://localhost:8899";

export type ApiError = {
	error: string;
};

export type ClusterContextType = {
	cluster: string;
	setCluster: Dispatch<SetStateAction<string>>;
};

export const ClusterNames = {
	DEVNET: { name: "Devnet", url: "https://api.devnet.solana.com" },
	TESTNET: { name: "Testnet", url: "https://api.testnet.solana.com" },
	MAINNET_BETA: {
		name: "Mainnet Beta",
		url: "https://api.mainnet-beta.solana.com",
	},
	CUSTOM: { name: "Custom", url: LOCALHOST },
};

export type EditorThemeType = {
	editorTheme: string;
	setEditorTheme: Dispatch<SetStateAction<string>>;
};

// Define theme options for react-json-view-lite
export const EditorThemeMap = new Map<string, string>([
	["light", "light"],
	["dark", "dark"],
	["SOLFS", "dark"], // Map SOLFS to dark theme
]);

export const EditorThemeKeys = Array.from(EditorThemeMap.keys());

export type DataAccountWithMeta = {
	pubkey: PublicKey;
	meta: IDataAccountMeta;
};
