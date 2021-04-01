import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Calculation = () => {
  const [userValues, setUserValues] = useState({
    hargaBeli: 0,
    ongkir: 0,
    asuransi: 0,
  });
  const [result, setResult] = useState({
    nilaiPabean: 0,
    beaMasuk: 0,
    nilaiImport: 0,
    ppn: 0,
    totalBayar: 0,
  });

  const kurs = 15000;
  const tarifBM = 0.075;
  const tarifPPN = 0.1;
  const defaultKeyboard = "number-pad";

  // const [error, setError] = useState("");

  // const handleInputChange = (event) => {
  //   setUserValues({ ...userValues, [event.target.name]: event.target.value });
  // };

  const handleHargaBeliInputChange = (value) => {
    setUserValues({ ...userValues, hargaBeli: value });
  };
  const handleOngkirInputChange = (value) => {
    setUserValues({ ...userValues, ongkir: value });
  };
  const handleAsuransiInputChange = (value) => {
    setUserValues({ ...userValues, asuransi: value });
  };

  const calculateTax = (goodsPrice, shippingCost, insurance) => {
    const hargaBeli = Number(goodsPrice) * kurs;
    const ongkir = Number(shippingCost) * kurs;
    const asuransi = Number(insurance) * kurs;
    const npn = hargaBeli + ongkir + asuransi;
    const bmsk = npn * tarifBM;
    const ni = npn + bmsk;
    const pajakPpn = ni * tarifPPN;
    const total = Math.ceil(bmsk + pajakPpn);

    setResult({
      nilaiPabean: npn,
      beaMasuk: bmsk,
      nilaiImport: ni,
      ppn: pajakPpn,
      totalBayar: total,
    });
    return;
  };

  const hitungTotal = () => {
    calculateTax(userValues.hargaBeli, userValues.ongkir, userValues.asuransi);
    // calculateTax({ hargaBeli, ongkir, asuransi });
  };

  return (
    <View>
      <Text style={styles._labelText}>Harga Beli Barang: </Text>
      <TextInput
        style={styles._input}
        placeholder="Harga beli barang..."
        onChangeText={handleHargaBeliInputChange}
        keyboardType={defaultKeyboard}
      />
      <Text style={styles._labelText}>Ongkos kirim:</Text>
      <TextInput
        style={styles._input}
        placeholder="Ongkos pengiriman..."
        onChangeText={handleOngkirInputChange}
        keyboardType={defaultKeyboard}
      />
      <Text style={styles._labelText}>Asuransi: </Text>
      <TextInput
        style={styles._input}
        placeholder="Biaya asuranasi"
        onChangeText={handleAsuransiInputChange}
        keyboardType={defaultKeyboard}
      />
      <TouchableOpacity style={styles._btn} onPress={hitungTotal}>
        <Text style={styles._btnText}>Hitung Pajak</Text>
      </TouchableOpacity>
      <View style={styles._resultContainer}>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Harga Beli Barang: </Text>
          <Text style={styles._priceResultText}>$ {userValues.hargaBeli}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Ongkos Pengiriman: </Text>
          <Text style={styles._priceResultText}>$ {userValues.ongkir}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Asuransi: </Text>
          <Text style={styles._priceResultText}>$ {userValues.asuransi}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Nilai Pabean:</Text>
          <Text style={styles._priceResultText}>Rp {result.nilaiPabean}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Bea Masuk: </Text>
          <Text style={styles._priceResultText}>Rp {result.beaMasuk}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Nilai Import:</Text>
          <Text style={styles._priceResultText}> Rp {result.nilaiImport}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>PPn: </Text>
          <Text style={styles._priceResultText}>Rp {result.ppn}</Text>
        </View>
        <View style={styles._totalResultTextWrapper}>
          <Text style={styles._totalText}>Total Bayar:</Text>
          <Text style={styles._totalPriceResultText}>
            {" "}
            Rp {result.totalBayar}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Calculation;

const styles = StyleSheet.create({
  _labelText: {
    fontSize: 17,
    marginLeft: 20,
    marginTop: 20,
  },
  _input: {
    alignSelf: "center",
    width: 320,
    height: 60,
    padding: 20,
    marginTop: 5,
    fontSize: 16,
    borderColor: "gold",
    borderWidth: 1,
    borderRadius: 10,
  },
  _btn: {
    alignSelf: "center",
    backgroundColor: "darkblue",
    padding: 20,
    marginVertical: 20,
    width: 320,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  _btnText: {
    color: "gold",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  _resultContainer: {
    paddingHorizontal: 30,
  },
  _resultTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  _resultText: {
    marginVertical: 5,
  },
  _priceResultText: {
    // fontWeight: "bold",
    fontSize: 16,
  },
  _totalText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  _totalPriceResultText: {
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "flex-end",
    color: "#112",
  },
  _totalResultTextWrapper: {
    borderBottomColor: "darkblue",
    borderBottomWidth: 1,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
