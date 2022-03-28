import { ElNotification } from 'element-plus';

// paste to clipboard
export async function paste() {
  if (navigator?.clipboard) {
    await navigator.clipboard.readText().then(text => {
      return text;
    });
  } else {
    alert('Your browser does not support clipboard, change url to localhost');
  }
}

// copy from clipboard
export async function copy(value: string): Promise<void> {
  if (navigator?.clipboard) {
    await navigator.clipboard.writeText(value).then(() => {});
  } else {
    alert('Your browser does not support clipboard, change url to localhost');
  }
}

// change file to base64
export function fileToLink(data: File) {
  if (data) {
    return URL.createObjectURL(data);
  }
}

// Return a number with spaces
export function numberWithSpaces(number: number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Validate form and show errors with notification
export function validateForm(form: any, name: string = 'form') {
  const formKeys = Object.keys(form.$model);
  const params = form
    .$flattenParams()
    .map((item: { name: string }) => item.name);
  for (const element of formKeys.length ? formKeys : ['none']) {
    for (const item of [...new Set(params)]) {
      if (
        form[element] &&
        Object.hasOwnProperty.call(form[element], `${item}`) &&
        !form[element][`${item}`]
      ) {
        const text = `${name}-${element}-${item}`.replace(/[-]/g, '_');
        return ElNotification({ type: 'error', title: 'Error', message: text });
      } else if (
        Object.hasOwnProperty.call(form, `${item}`) &&
        !form[`${item}`]
      ) {
        const text = `${name}-${item}`.replace(/[-]/g, '_');
        return ElNotification({
          type: 'error',
          title: 'Error',
          message: text
        });
      }
    }
  }
}
