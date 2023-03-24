export interface Impression {
    text: string;
    value: string;
}
export interface ImpressionContent {
    male: Impression[];
    female: Impression[];
}
export const content: ImpressionContent = {
    male: [
        {
            text: 'Impresion Man 1',
            value: 'impresion-man-1',
        },
        {
            text: 'Impresion Man 2',
            value: 'impresion-man-2',
        },
        {
            text: 'Impresion Man 3',
            value: 'impresion-man-3',
        },
        {
            text: 'Impresion Man 4',
            value: 'impresion-man-4',
        },
        {
            text: 'Impresion Man 5',
            value: 'impresion-man-5',
        },
        {
            text: 'Impresion Man 6',
            value: 'impresion-man-6',
        },
    ],
    female: [
        {
            text: 'Impresion Female 1',
            value: 'impresion-female-1',
        },
        {
            text: 'Impresion Female 2',
            value: 'impresion-female-2',
        },
        {
            text: 'Impresion Female 3',
            value: 'impresion-female-3',
        },
        {
            text: 'Impresion Female 4',
            value: 'impresion-female-4',
        },
        {
            text: 'Impresion Female 5',
            value: 'impresion-female-5',
        },
        {
            text: 'Impresion Female 6',
            value: 'impresion-female-6',
        },
    ],
};
