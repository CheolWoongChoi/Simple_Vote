import { ChangeEvent, useState, useCallback } from 'react';

function useInputs(initialValue: any) {
  const [form, setForm] = useState(initialValue);

  const onChangeForm = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

			console.log(e.target);
			console.log(name, value);
			
      setForm((form: any) => ({ ...form, [name]: value }));
    },
    []
  );

  const resetForm = useCallback(() => setForm(initialValue), [initialValue]);
	
  return [form, onChangeForm, resetForm];
}

export default useInputs;
