import {VoceSpesa} from 'VoceSpesa';

export class Spesa {
    public SpesaNo: number;
    public Data: Date;
    public Importo: number;
    public VoceSpesaNo: number;
    public Note: string;
    public NoContoCorrente: boolean;
    public AttesaMovimento: boolean;
    public Voce: VoceSpesa;
}