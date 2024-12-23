package bankingmanagement.osdsa.repository;

import bankingmanagement.osdsa.model.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TransactionRepository extends MongoRepository<Transaction, String> {
    List<Transaction> findBySenderCustomerId(String senderCustomerId);  // Find transactions by sender
    List<Transaction> findByRecipientCustomerId(String recipientCustomerId);  // Find transactions by recipient
}
