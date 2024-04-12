import { useFieldContext } from "../../../../../dataManagments/context/FieldParametersContext";

export const ImaginaryLabel = () => {
    const parameters = useFieldContext();

    return (
        <>
            <label htmlFor={parameters.field.id}>
                {parameters.field.label}
                {(() => {
                    if (parameters.field.isRequied) {
                        return <span aria-label='required'>*</span>
                    }
                    if (parameters.field.isRecommended) {
                        return <span className='recommended__text'> recommended</span>
                    }
                    if (parameters.field.isOptional) {
                        return <span className='optional__text'> optional</span>
                    }
                })()}
            </label>
        </>
    )
}