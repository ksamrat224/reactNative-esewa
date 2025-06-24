import { Button, Alert, View } from 'react-native';
import RNEsewa from 'react-native-esewa';

// Tell TypeScript to treat it as 'any' for now
const Esewa = RNEsewa as any;

const EsewaPayment = () => {
  const pay = () => {
    const options = {
      amount: '100',
      productName: 'Test Item',
      productId: '1234567890',
      callbackUrl: 'https://esewa.com.np',
      merchantCode: 'EPAYTEST',
    };

    Esewa.initiatePayment(
      options,
      (success: any) => {
        console.log('Payment success:', success);
        Alert.alert('Success', JSON.stringify(success));
      },
      (failure: any) => {
        console.log('Payment failed:', failure);
        Alert.alert('Failed', JSON.stringify(failure));
      }
    );
  };

  return <Button title="Pay with eSewa" onPress={pay} />;
};

export default EsewaPayment;
