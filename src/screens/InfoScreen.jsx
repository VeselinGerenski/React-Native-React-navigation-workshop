import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";


export default function InfoScreen() {
    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.restaurantName}>Tasty Bites</Text>
                <Text style={styles.tagline}>Fresh & Delicious Food</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About Us</Text>
                <Text style={{ ...styles.infoText, marginBottom: '15' }}>  Tasty Bites is a family-owned restaurant that has been serving delicious meals since 1995. We pride ourselves on using fresh ingredients and traditional recipes to create mouth-watering dishes that our customers love.</Text>
                <Text style={styles.infoText}>  Our menu features a wide variety of options, including vegetarian and gluten-free dishes, to cater to all tastes and dietary needs. Whether you're in the mood for a hearty burger, a fresh salad, or a comforting bowl of pasta, we've got you covered.</Text>
            </View>

            <TouchableOpacity style={styles.section}>
                <View style={styles.locationCard}>
                    <Text style={styles.sectionTitle}>Location</Text>
                    <Text style={styles.infoText}>123 Main Street, Anytown, USA</Text>      
                </View>

            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 24,
        paddingTop: 16,
        paddingBottom: 28,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    restaurantName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    headerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        color: '#786f6f',
        opacity: 0.9,
    },
    infoDot: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.6,
        marginHorizontal: 8,
    },
    tagline: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
    },
    section: {
        padding: 16,
        paddingBottom: 8,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginBottom: 12,
    },
    featuredList: {
        paddingRight: 16,
        flexDirection: 'row',
    },
    featuredCard: {
        width: 200,
        marginRight: 12,
    },
    bottomPadding: {
        height: 24,
    },
});
