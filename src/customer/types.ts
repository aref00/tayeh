import { Sex, instance, Invoice, address, reminder } from "../instance/types"
import { media } from "../media/types"
import { user } from "../user/types"

export type customer = {
    id: number;
    name: string;
    sex: Sex;
    instance_id: number;
    instance: instance;
    invoices: Invoice[];
    description: string;
    id_card: string;
    father: string;
    birthdate: string;
    addresses: address[];
    phone: string;
    mobile: string;
    email: string;
    website: string;
    creator_id: number;
    creator: user;
    reminders: reminder[];
    is_verified: boolean;
    socket: string;
    image_id: number;
    image: media;
    deleted: boolean;
    date_created: Date;
    date_updated: Date;
    date_deleted: Date;
  };