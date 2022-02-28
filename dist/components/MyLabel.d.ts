/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el mensaje
     */
    label: string;
    /**
     * Este es el tamaño
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Transformar todo a Uppercase
     */
    allCaps?: boolean;
    /**
     * Este es el color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Este es el fontColor
     */
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, }: MyLabelProps) => JSX.Element;
