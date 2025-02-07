export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-05'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)


export const ordertoken = assertValue(
  "ske0nwF6kWkMCtAZuEXbWXsa2GaYzwjHtybpVJgIW2pcXz4lDn6ssupXw1arSgtM3JwwQPmMGeqtSaAs9l2DVrKFckytNr5Uxrd30tP3MBlNU6baX0PPQ2wsEq9dr6SMQ85tx4qQrlXYDP3PrQ000hDAcyIUxwY5qcyWrl1FdCd6QkUbEb4Z",
  'Missing environment variable: NEXT_order_token'
)
  export const token = assertValue(
    "skQCkduLaSsd6LFi2vGNdkgitFwGBucIvvGx8rTJSiY5EK0XvnRZuhgRK1m1T9of8QecegGpZZAeeBRUo56CCu7rc91Sxm2XEhkmX3F7N5UOsdoUf08MucIertxUSVYaQnxf33tshbglc7QYRtgDqehId4vU9v33ppkL7boGko6Rjmm8CXA7",
    'Missing environment variable: NEXT_API_TOKEN'
  
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
