/* eslint-disable no-mixed-spaces-and-tabs */
export const getFormattedDate = (date: Date) =>
	date
		? new Date(date).toLocaleDateString('es-es', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
		  })
		: '';
