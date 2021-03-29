import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Calculation = () => {
  const [hargaBeli, setHargaBeli] = useState(0);
  const [ongkir, setOngkir] = useState(0);
  const [asuransi, setAsuransi] = useState(0);
  const [nilaiPabean, setNilaiPabean] = useState(0);
  const [beaMasuk, setBeaMasuk] = useState(0);
  const [nilaiImport, setNilaiImport] = useState(0);
  const [ppn, setPpn] = useState(0);
  const [totalImportTax, setTotalImportTax] = useState(0);

  const kurs = +15000;
  const tarifBM = +0.075;
  const tarifPPN = +0.1;

  const nb = () => hargaBeli * kurs + ongkir * kurs + asuransi * kurs;
  const bm = () => nilaiPabean * tarifBM;
  const ni = () => nilaiPabean + beaMasuk;
  const pajakPpn = () => nilaiImport * tarifPPN;
  const total = () => Math.ceil(beaMasuk + ppn);

  const hitungTotal = () => {
    setNilaiPabean(nb);
    setBeaMasuk(bm);
    setNilaiImport(ni);
    setPpn(pajakPpn);
    setTotalImportTax(total);
  };

  const inputHargaBarang = (inputValue) => {
    setHargaBeli(inputValue);
  };

  const inputOngkir = (inputValue) => {
    setOngkir(inputValue);
  };

  const inputAsuransi = (inputValue) => {
    setAsuransi(inputValue);
  };

  return (
    <View>
      <Text style={styles._labelText}>Harga Beli Barang: </Text>
      <TextInput
        style={styles._input}
        placeholder="Harga beli barang..."
        onChangeText={inputHargaBarang}
      />
      <Text style={styles._labelText}>Ongkos kirim:</Text>
      <TextInput
        style={styles._input}
        placeholder="Ongkos pengiriman..."
        onChangeText={inputOngkir}
      />
      <Text style={styles._labelText}>Asuransi: </Text>
      <TextInput
        style={styles._input}
        placeholder="Biaya asuranasi"
        onChangeText={inputAsuransi}
      />
      <TouchableOpacity style={styles._btn} onPress={() => hitungTotal()}>
        <Text style={styles._btnText}>Hitung Pajak</Text>
      </TouchableOpacity>
      <View style={styles._resultContainer}>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Harga Beli Barang: </Text>
          <Text style={styles._priceResultText}>$ {hargaBeli}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Ongkos Pengiriman: </Text>
          <Text style={styles._priceResultText}>$ {ongkir}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Asuransi: </Text>
          <Text style={styles._priceResultText}>$ {asuransi}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Nilai Pabean:</Text>
          <Text style={styles._priceResultText}>Rp {nilaiPabean}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Bea Masuk: </Text>
          <Text style={styles._priceResultText}>Rp {beaMasuk}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>Nilai Import:</Text>
          <Text style={styles._priceResultText}> Rp {nilaiImport}</Text>
        </View>
        <View style={styles._resultTextWrapper}>
          <Text style={styles._resultText}>PPn: </Text>
          <Text style={styles._priceResultText}>Rp {ppn}</Text>
        </View>
        <View style={styles._totalResultTextWrapper}>
          <Text style={styles._totalText}>Total Bayar:</Text>
          <Text style={styles._totalPriceResultText}> Rp {totalImportTax}</Text>
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
  },
  _btnText: {
    color: "white",
    fontSize: 20,
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
    fontWeight: "bold",
    fontSize: 20,
  },
  _totalText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  _totalPriceResultText: {
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "flex-end",
  },
  _totalResultTextWrapper: {
    borderBottomColor: "darkblue",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
