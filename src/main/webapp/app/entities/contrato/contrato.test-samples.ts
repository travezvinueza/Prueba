import dayjs from 'dayjs/esm';

import { Idioma } from 'app/entities/enumerations/idioma.model';

import { IContrato, NewContrato } from './contrato.model';

export const sampleWithRequiredData: IContrato = {
  id: 24858,
};

export const sampleWithPartialData: IContrato = {
  id: 9181,
  fechaInicio: dayjs('2023-02-15T20:37'),
  fechaFin: dayjs('2023-02-16T06:07'),
};

export const sampleWithFullData: IContrato = {
  id: 51721,
  fechaInicio: dayjs('2023-02-16T13:09'),
  fechaFin: dayjs('2023-02-16T00:49'),
  lenguaje: Idioma['ESPANOL'],
};

export const sampleWithNewData: NewContrato = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
