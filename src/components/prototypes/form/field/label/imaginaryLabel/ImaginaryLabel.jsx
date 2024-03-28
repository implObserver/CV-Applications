import { useFieldContext } from "../../../../../dataManagments/context/FieldParametersContext";

export const ImaginaryLabel = () => {
    const parameters = useFieldContext();

    return (
        <>
            <label htmlFor={parameters.id}>
                {parameters.label}
                {(() => {
                    if (parameters.isRequied) {
                        return <span aria-label='required'>*</span>
                    }
                    if (parameters.isRecommended) {
                        return <span className='recommended__text'> recommended</span>
                    }
                    if (parameters.isOptional) {
                        return <span className='optional__text'> optional</span>
                    }
                })()}
            </label>
        </>
    )
}